'use strict';

/**
 * news-and-articles service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-articles.news-and-articles');
