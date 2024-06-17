import { setIn, getIn } from "final-form";
import * as yup from "yup";
import { numbersRegex } from "./regex.ts";

const validateFormValues =
  <F>(schema: yup.Schema) =>
  async (values: F): Promise<string | undefined> => {
    try {
      await schema.validateSync(values, { abortEarly: false });
    } catch (err) {
      const errors = (err as yup.ValidationError).inner.reduce(
        (
          formError: Record<string, string>,
          innerError: yup.ValidationError
        ) => {
          const existingError = getIn(formError, innerError.path!);
          const newError = existingError
            ? `${existingError}, ${innerError.message}`
            : innerError.message;
          return setIn(formError, innerError.path!, newError);
        },
        {}
      );

      return errors as string;
    }

    return undefined;
  };

const validateNumberValue = (value: string) =>
  value === "0" ? "" : value.replace(numbersRegex, "");

export { validateFormValues, validateNumberValue };
