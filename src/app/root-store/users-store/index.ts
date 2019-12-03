export * from "./actions";
export * from "./effects";
export * from "./reducer";
export * from "./services/dispatchers";
export * from "./services/selectors";

import { UserDispatchers } from "./services/dispatchers";
import { UserSelectors } from "./services/selectors";

export const services = [UserDispatchers, UserSelectors];
