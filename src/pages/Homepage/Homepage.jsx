import { useState } from "react"
// Components
import FormStepper from "../../components/FormStepper/FormStepper"
import Congratz from "../../components/Congratz/Congratz";
// Sections
import PersonalInfo from "../../sections/HomePage/PersonalInfo";
import CompanyInfo from "../../sections/HomePage/CompanyInfo";
import Submit from "../../sections/HomePage/Submit";
// Icons
import { IoMdPerson } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
// redus
import { useSelector } from "react-redux";
//-------------------------------------------------------------------------

const steps = [
  {
    id: 1,
    index: 1,
    value: 'personal_info',
    icon: <IoMdPerson className="h-5 w-5 " />,
  },
  {
    id: 1,
    index: 2,
    value: 'company_info',
    icon: <FaRegBuilding className="h-5 w-5" />
  },
  {
    id: 1,
    index: 3,
    value: 'submit',
    icon: < GoShieldCheck className="h-5 w-5" />
  },
]

const Homepage = () => {

  const { registerIsSucessful } = useSelector(state => state.settings)

  const [selectedStep, setSelectedStep] = useState(steps?.[2])

  const onSelectStepHandler = (step) => {
    setSelectedStep(step)
  }

  const onNextHandler = (nextStepIndex) => {
    setSelectedStep(steps?.[nextStepIndex])
  }

  const onPreviousHandler = (previousStepIndex) => {
    setSelectedStep(steps?.[previousStepIndex])
  }

  // ------- JSX Code ------
  return (
    <div className="w-full md:w-3/4 mx-auto py-10" >

      {!registerIsSucessful &&
        <>
          <FormStepper
            steps={steps}
            activeStepIndex={selectedStep?.index}
            onSelectStep={onSelectStepHandler}
          />

          {selectedStep?.value === 'personal_info' && <PersonalInfo onNext={onNextHandler} />}

          {selectedStep?.value === 'company_info' && <CompanyInfo onNext={onNextHandler} onPrevious={onPreviousHandler} />}

          {selectedStep?.value === 'submit' && <Submit  onPrevious={onPreviousHandler} />}
        </>
      }

      {registerIsSucessful && <Congratz />}


    </div>
  )
}

export default Homepage;
