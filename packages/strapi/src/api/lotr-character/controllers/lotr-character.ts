/**
 * lotr-character controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::lotr-character.lotr-character",
	({ strapi }) => ({
		async findOne(ctx) {
			const { id } = ctx.params;
			const entity = await strapi.db
				.query("api::lotr-character.lotr-character")
				.findOne({
					where: { slug: id },
					populate: ["portrait", "tags"],
				});
			const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
			return this.transformResponse(sanitizedEntity);
		},
	})
);
