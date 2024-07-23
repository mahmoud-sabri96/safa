import { useFormContext, Controller } from "react-hook-form";
// Locales
import useLocales from "../../locales/useLocales";
// --------------------------------------------------------------

export default function RHFInput({ name, label, endIcon, placeholder, ...other }) {

    const { control } = useFormContext();

    const { currentLang } = useLocales()

    const dir = currentLang?.value === 'ar' ? "rtl" : 'ltr'

    // ----- JSX Code ------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error:fieldError } }) => (
                <>
                    <label className="text-sm sm:text-lg px-2 block text-primary mb-2 font-[500]">
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
                            <span className={`absolute top-[50%] translate-y-[-50%] ${dir === 'rtl' ? 'left-4' : 'right-4'} `}>
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