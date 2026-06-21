import type { Validator } from "../types";
import { validateResourceName, validateOwner, validateEmail, validateDescription, validateProjectName, validateBudget } from "./validators";

export const validationSchema = {
  resourceName: validateResourceName,
  owner: validateOwner,
  email: validateEmail,
  description: validateDescription,
  projectName: validateProjectName,
  budget: validateBudget,
} satisfies Record<string, Validator>
