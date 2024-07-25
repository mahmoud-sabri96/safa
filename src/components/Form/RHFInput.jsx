import { useFormContext, Controller } from "react-hook-form";

// --------------------------------------------------------------

export default function RHFInput({ name, label, endIcon, placeholder, ...other }) {

    const { control } = useFormContext();


    // ----- JSX Code ------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error:fieldError } }) => (
                <>
                    <label className="text-sm sm:text-lg px-2 block mb-2 font-[600]">
                        {label}
                    </label>
                    <div className="relative">
                        <input
                            {...field}
                            value={
                                typeof field.value === "number" && field.value === 0
                                    ? ""
                                    : field.value
                            }
                            placeholder={placeholder}
                            {...other}
                        />

                        {endIcon &&
                            <span className={`absolute top-[50%]  right-2 translate-y-[-50%]  } `}>
                                {endIcon}
                            </span>

                        }
                    </div>
                    {
                        fieldError &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                                {fieldError?.message}
                        </p>
                    }
                    {/* {
                        error &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                                {error}
                        </p>
                    } */}
                </>
            )}
        />
    );
}