import { Request, Response } from "express";
import { responseBuilder, B2B_EXAMPLES_PATH } from "../../../lib/utils";
import fs from "fs";
import path from "path";
import YAML from "yaml";

export const confirmController = (req: Request, res: Response) => {
	const { scenario } = req.query;
	switch (scenario) {
		case "default":
			confirmDomesticController(req, res);
			break;
		case "cancelled":
			confirmDomesticRejected(req, res);
			break;
		default:
			confirmDomesticController(req, res);
			break;
	}
};

const confirmDomesticController = (req: Request, res: Response) => {
	const { context, message } = req.body;
	const start = new Date(message.order.created_at);
	start.setHours(start.getHours() + 1);
	const end = new Date(message.order.created_at);
	end.setHours(end.getHours() + 2);

	const file = fs.readFileSync(
		path.join(B2B_EXAMPLES_PATH, "on_confirm/on_confirm_domestic.yaml")
	);

	const response = YAML.parse(file.toString());

	const responseMessage = {
		order: {
			...message.order,
			state: "Accepted",
			provider: {
				...message.order.provider,
				rateable: true,
			},
			fulfillments: message.order.fulfillments.map((eachFulfillment: any) => ({
				...eachFulfillment,
				"@ondc/org/provider_name":
					response.value.message.order.fulfillments[0][
						"@ondc/org/provider_name"
					],
				state: response.value.message.order.fulfillments[0].state,
				stops: [
					...eachFulfillment.stops,
					{
						...response.value.message.order.fulfillments[0].stops[0],
						time: {
							range: {
								start: start.toISOString(),
								end: end.toISOString(),
							},
						},
					},
				],
			})),
		},
	};
	return responseBuilder(
		res,
		context,
		responseMessage,
		`${req.body.context.bap_uri}${
			req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
		}`,
		`on_confirm`,
		"b2b"
	);
};

const confirmDomesticRejected = (req: Request, res: Response) => {
	const { context, message } = req.body;
	const start = new Date(message.order.created_at);
	start.setHours(start.getHours() + 1);
	const end = new Date(message.order.created_at);
	end.setHours(end.getHours() + 2);

	const file = fs.readFileSync(
		path.join(B2B_EXAMPLES_PATH, "on_confirm/on_confirm_domestic.yaml")
	);

	const response = YAML.parse(file.toString());

	const responseMessage = {
		order: {
			...message.order,
			state: "Accepted",
			provider: {
				...message.order.provider,
				rateable: true,
			},
			fulfillments: message.order.fulfillments.map((eachFulfillment: any) => ({
				...eachFulfillment,
				"@ondc/org/provider_name":
					response.value.message.order.fulfillments[0][
						"@ondc/org/provider_name"
					],
				state: response.value.message.order.fulfillments[0].state,
				stops: [
					...eachFulfillment.stops,
					{
						...response.value.message.order.fulfillments[0].stops[0],
						time: {
							range: {
								start: start.toISOString(),
								end: end.toISOString(),
							},
						},
					},
				],
			})),
		},
	};
	return responseBuilder(
		res,
		context,
		responseMessage,
		`${req.body.context.bap_uri}${
			req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
		}`,
		`on_confirm`,
		"b2b",
		{
			type: "DOMAIN-ERROR",
			code: "30019",
			message: "PO rejected",
		}
	);
};
