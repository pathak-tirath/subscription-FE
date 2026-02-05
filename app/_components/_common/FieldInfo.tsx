// For handling the errors and other states like validation
import { AnyFieldApi } from "@tanstack/react-form";

export const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid
        ? field.state.meta.errors.map((error) => {
            return (
              <em
                key={error.message}
                className="text-red-400 text-xs pt-2 w-xs px-2"
              >
                {error.message}
              </em>
            );
          })
        : null}
      {field.state.meta.isValidating ? "...." : null}
    </>
  );
};
