import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  XIcon,
} from "react-share";
import useLocales from "../../locales/useLocales";
const ShareSocial = ({ currentUrl }) => {
  const { translate } = useLocales()

  const title = "Kits Technology";

  return (
    <div className="flex flex-col">
      <h4 className="text-center text-gray-500 text-md md:text-lg">{translate('global.share_at_social')}</h4>
      <div className="flex gap-4 justify-center py-4">
        <div>
          <FacebookShareButton
            url={currentUrl}
            className="Demo__some-network__share-button">
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton
            url={currentUrl}
            title={title}
            className="Demo__some-network__share-button">
            <XIcon size={40} round />
          </TwitterShareButton>
        </div>
        <div>
          <WhatsappShareButton
            url={currentUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
        <div>
          <LinkedinShareButton
            url={currentUrl}
            className="Demo__some-network__share-button">
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};
export default ShareSocial;
