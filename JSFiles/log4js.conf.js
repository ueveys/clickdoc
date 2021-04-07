"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
log4js_1.configure("./filename");
const logger = log4js_1.getLogger();
logger.level = "info";
logger.debug("Some debug messages");
log4js_1.configure({
    appenders: { cheese: { type: "file", filename: "./logs/cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "info" } }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzLmNvbmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sb2c0anMuY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE4QztBQUM5QyxrQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sTUFBTSxHQUFHLGtCQUFTLEVBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFcEMsa0JBQVMsQ0FBQztJQUNSLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEVBQUU7SUFDdEUsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0NBQ2xFLENBQUMsQ0FBQyJ9