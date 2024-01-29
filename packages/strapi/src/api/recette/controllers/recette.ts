/**
 * recette controller
 */

import { factories } from "@strapi/strapi";

// export default factories.createCoreController('api::recette.recette');

export default factories.createCoreController(
	"api::recette.recette",
	({ strapi }) => ({
		async findOne(ctx) {
			const { id } = ctx.params;
			const entity = await strapi.db.query("api::recette.recette").findOne({
				where: { slug: id },
				populate: ["image", "tags"],
			});
			const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
			return this.transformResponse(sanitizedEntity);
		},
	})
);
