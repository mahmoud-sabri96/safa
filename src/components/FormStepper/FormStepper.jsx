import { Fragment, useEffect, useState } from "react";
// Icons
import { MdOutlineDone } from "react-icons/md";
// ------------------------------------------------------

const FormStepper = ({ activeStepIndex, steps, onSelectStep }) => {

    const [activeStep, setActiveStep] = useState(activeStepIndex)

    // const clickStepHandler = (step) => {
    //     setActiveStep(step.index)
    //     onSelectStep({
    //         index: step.index,
    //         value: step.value
    //     })
    // }

    const activeIconStyle = 'bg-primary text-white rounded-md'

    const inactiveIconStyle = 'bg-white text-primary'

    const doneIcon = (
        <span className={`bg-primary text-white p-2 rounded-full`}>
            <MdOutlineDone />
        </span>
    )

    useEffect(() => {
        setActiveStep(activeStepIndex)
    }, [activeStepIndex])

    // ------ JSX Code ------
    return (
        <div className="w-full h-[86px] flex items-center bg-[#F2F2F2] px-3">
            <div className="w-[100%] sm:w-[80%] lg:w-[100%]  mx-auto py-4 ">
                <div className="flex justify-between items-center">
                    {steps?.map((step, index) =>
                        <Fragment key={step.index}>
                            <div
                                // onClick={() => clickStepHandler(step)}
                                className=" cursor-pointer flex flex-col md:flex-row  items-center"
                            >
                                {
                                    (activeStep === step.index ||
                                        step.index === steps?.length ||
                                        activeStep === 1)
                                    &&
                                    <span
                                        key={step.index}
                                        className={`${activeStep === step.index ? activeIconStyle : inactiveIconStyle} p-2 `}
                                    >
                                        {step.icon}
                                    </span>
                                }
                                {(activeStep > step.index && step.index !== steps?.length) && doneIcon}
                                <span className={`${activeStep === step.index ? 'text-black font-[600]' : 'text-gray'} text-[10px] sm:text-md  `}>
                                    {step.title}
                                </span>
                            </div>
                            {
                                index < steps.length - 1 &&
                                <div className={`${(activeStep > step.index) ? 'bg-primary' : 'bg-[#C3D2CC]'} mb-5 md:mb-0 h-[5px]  w-full mx-auto`}>
                                </div>
                            }
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormStepper