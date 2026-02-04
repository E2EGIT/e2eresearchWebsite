import Link from "next/link";
import HomeIcon from "../../../../public/slm/icon/home.svg";

export default function Breadcrumb(props: any) {
  const { hedding, urls, activeUrl } = props;

  return (
    <section className="custom-bred bread-crumb-container pd-50 padding-left-x">
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <HomeIcon className="home-icon" />
              </Link>
            </li>
            {hedding && urls ? (
              <li className="breadcrumb-item not-active">
                <Link href={urls ? urls : "/"}>
                  <span className="hover-line-effect link-hover-color">
                    {" "}
                    {hedding}
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )}
            <li
              className="breadcrumb-item active link active-link"
              aria-current="page"
            >
              <span> {activeUrl}</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
