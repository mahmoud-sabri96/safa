import { useFormContext, Controller } from "react-hook-form";
// ----------------------------------------------------------


export default function RHFTextArea({ name, label, placeholder, ...other }) {

    const { control } = useFormContext();

    // ----- JSX Code ------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <label className="text-sm sm:text-lg  px-3 block text-primary mb-2 font-[500]">
                        {label}
                    </label>
                    <textarea
                        {...field}
                        value={
                            typeof field.value === "number" && field.value === 0
                                ? ""
                                : field.value
                        }
                        placeholder={placeholder}
                        {...other}
                    />
                    {
                        error &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                            {error?.message}
                        </p>
                    }
                </>
            )}
        />
    );
}