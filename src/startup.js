import * as Logger from "./utils/logger.js";

const initialise = async () => {
  try {
    Logger.writeLog(`Server running on PORT: 4000`);
  } catch (error) {
    Logger.writeLog(error && error.message ? error.message : "Unknown error.");
  }
};

export default { initialise };
