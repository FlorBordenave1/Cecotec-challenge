import { Typography } from "../ui/typography";

enum BadgeColor {
  SUCCESS = "text-apple70",
}

enum BadgeBgColor {
  SUCCESS = "bg-apple20",
}

type BadgeProps = {
  label: string;
  type?: keyof typeof BadgeColor;
};

export const Badge = ({ label, type = "SUCCESS" }: BadgeProps) => {
  return (
    <div className={`${BadgeBgColor[type]} py-1 px-2 rounded-md`}>
      <Typography
        label={label}
        variant="h3"
        className={`${BadgeColor[type]} font-bold`}
      />
    </div>
  );
};
