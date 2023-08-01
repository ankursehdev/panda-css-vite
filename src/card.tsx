import { css } from "../styled-system/css";
// import { styled } from "../styled-system/jsx";
import { circle, stack } from "../styled-system/patterns";
import { cva } from "../styled-system/css";
import { styled } from "../styled-system/jsx";

const badge = cva({
  base: {
    fontWeight: "medium",
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "99999px",
  },
  variants: {
    status: {
      default: {
        color: "red",
        bg: "gray.500",
      },
      success: {
        color: "white",
        bg: "green.500",
      },
    },
  },
});

export const Badge = styled("span", badge);
// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { header } = card();
//   return <div ref={ref} className={header({ class: className })} {...props} />;
// });
// CardHeader.displayName = "CardHeader";
export function Card() {
  return (
    <div className={stack()}>
      <Badge className={badge({ status: "default" })}>Active</Badge>
      <div className={circle({ size: "5rem", overflow: "hidden" })}>
        <img
          src="https://gravatar.com/avatar/3d89e3323a5ca768e8d48ba42830f275?s=400&d=robohash&r=x"
          alt="avatar"
        />
      </div>
      <div className={css({ mt: "4", fontSize: "xl", fontWeight: "semibold" })}>
        John Doe
      </div>
      <div className={css({ mt: "2", fontSize: "sm", color: "gray.600" })}>
        john@doe.com
      </div>
    </div>
  );
}
