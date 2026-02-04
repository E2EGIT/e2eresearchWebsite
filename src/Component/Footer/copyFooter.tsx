import { copyText } from "../widgets/Constant";

const CopyFooter = () => {
  return (
    <>
      <section className="footer-sec text-center copy-footer footer-border">
        {copyText}
      </section>
    </>
  );
};

export default CopyFooter;
