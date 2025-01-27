import { Request, Response } from "express";
import { SERVICES_EXAMPLES_PATH, checkIfCustomized, quoteCreatorService, responseBuilder } from "../../../lib/utils";
import fs from "fs";
import path from "path";
import YAML from "yaml";


export const confirmController = (req: Request, res: Response) => {
	if (checkIfCustomized(req.body.message.order.items)) {
		// console.log('Im here');

		return confirmServiceCustomizationController(req, res);
	}
	confirmConsultationController(req, res);
	// const { scenario } = req.query;
	// switch (scenario) {
	// 	case "consultation":
	// 		confirmConsultationController(req, res);
	// 		break;
	// 	case "service":
	// 		confirmServiceController(req, res);
	// 		break;
	// 	default:
	// 		res.status(404).json({
	// 			message: {
	// 				ack: {
	// 					status: "NACK",
	// 				},
	// 			},
	// 			error: {
	// 				message: "Invalid scenario",
	// 			},
	// 		});
	// 		break;
	// }
};


export const confirmConsultationController = (req: Request, res: Response) => {
	const { context, message: { order } } = req.body;
	const { fulfillments } = order
	// const file = fs.readFileSync(
	// 	path.join(SERVICES_EXAMPLES_PATH, "on_confirm/on_confirm_consultation.yaml")
	// );
	// const response = YAML.parse(file.toString());
	const rangeStart = new Date().setHours(new Date().getHours() + 2)
	const rangeEnd = new Date().setHours(new Date().getHours() + 3)
	fulfillments[0].stops.push({
		"type": "start",
		"location": {
			"id": "L1", // provider location Id
			"descriptor": {
				"name": "ABC Store" // provider desceriptor
			},
			"gps": "12.956399,77.636803" //provider gps
		},
		"time": {
			"range": {
				"start": new Date(rangeStart).toISOString(), //"2023-11-16T09:30:00Z" // add 2 hour from context timestamp
				"end": new Date(rangeEnd).toISOString() // add 1 hour from start timestamp
			}
		},
		"contact": {
			"phone": "9886098860",
			"email": "nobody@nomail.com"
		},
		"person": {
			"name": "Kishan"
		}
	})
	const responseMessage = {
		order: {
			...order,
			status: 'Accepted',
			fulfillments: [{
				...fulfillments[0],
				state: {
					descriptor: {
						code: "Pending"
					}
				},
				stops: fulfillments[0].stops.map((itm: any) => ({
					...itm,
					person: itm.customer && itm.customer.person ? itm.customer.person : undefined,
				})),
				rateable: true,
			}],
			provider: {
				...order.provider,
				rateable: true
			}
		}
	}
	return responseBuilder(
		res,
		context,
		responseMessage,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
		}`,
		`on_confirm`,
		"services"
	);
};


export const confirmServiceCustomizationController = (req: Request, res: Response) => {
	const { context, message: { order } } = req.body;
	// const { fulfillments } = order
	const file = fs.readFileSync(
		path.join(SERVICES_EXAMPLES_PATH, "on_confirm/on_confirm_consultation.yaml")
	);
	const response = YAML.parse(file.toString());
	const rangeStart = new Date().setHours(new Date().getHours() + 2)
	const rangeEnd = new Date().setHours(new Date().getHours() + 3)

	const fulfillments = response.value.message.order.fulfillments

	fulfillments[0].stops.push(
		{
			"id": "L2",
			"type": "end",
			"location": {
				"gps": "12.974002,77.613458",
				"address": "My House #, My buildin",
				"city": {
					"name": "Bengaluru"
				},
				"country": {
					"code": "IND"
				},
				"area_code": "560001",
				"state": {
					"name": "Karnataka"
				}
			},
			"contact": {
				"phone": "9886098860",
				"email": "nobody@nomail.com"
			},
			"time": {
				"label": "confirmed",
				"range": {
					"start": new Date(rangeStart).toISOString(),
					"end": new Date(rangeEnd).toISOString()
				}
			},
			"person": {
				"name": "Ramu"
			},
			"instructions": {
				"name": "Special Instructions",
				"short_desc": "Customer Special Instructions"
			},
			"authorization": {
				"type": "OTP",
				"token": "1234",
				"valid_from": "2023-11-16T09:30:00Z",
				"valid_to": "2023-11-16T09:35:00Z",
				"status": "valid"
			}
		})

	const responseMessage = {
		order: {
			...order,
			provider: {
				provider: order.provider,
				rateable: true,
			},
			status: 'Accepted',
			fulfillments: [{
				...fulfillments[0],
				rateable: true,
				// stops: 
			}]
		}
	}
	return responseBuilder(
		res,
		context,
		responseMessage,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
		}`,
		`on_confirm`,
		"services"
	);
};


export const confirmServiceController = (req: Request, res: Response) => {
	const { context } = req.body;
	const file = fs.readFileSync(
		path.join(SERVICES_EXAMPLES_PATH, "on_confirm/on_confirm_service.yaml")
	);
	const response = YAML.parse(file.toString());
	return responseBuilder(
		res,
		context,
		response.value.message,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
		}`,
		`on_confirm`,
		"services"
	);
};

