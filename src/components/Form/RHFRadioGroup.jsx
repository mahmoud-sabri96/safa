// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// rsuite
import { Radio, RadioGroup } from "rsuite"
// Locales
import useLocales from "../../locales/useLocales";
// --------------------------------------------------------------

const RHFRadioGroup = ({ name, label, placeholder, options, ...other }) => {

    const { control } = useFormContext();

    const { translate } = useLocales()

    // ----- JSX Code --------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <label className="text-sm sm:text-lg px-2 block text-primary mb-2 font-[500]">
                        {label}
                    </label>
                    <RadioGroup
                        {...field}
                        value={
                            typeof field.value === "number" && field.value === 0
                                ? ""
                                : field.value
                        }
                        placeholder={placeholder}
                        {...other}
                    >
                        <div className="flex gap-6">
                            {
                                options?.map((option) =>
                                    <Radio
                                        className="bg-red-80"
                                        key={option?.value}
                                        value={option?.value}
                                    >
                                        {translate(option?.name)}
                                    </Radio>
                                )
                            }
                        </div>
                    </RadioGroup>
                    {
                        error &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                            {error?.message}
                        </p>
                    }
                </>
            )}
        />
    )
}

export default RHFRadioGroup