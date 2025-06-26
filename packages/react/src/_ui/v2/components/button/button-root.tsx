import { cn } from "@/utilities/cn"

export function ButtonRoot(props: React.ComponentProps<'button'>) {
  return <button
    {...props}
    className={cn("pulso:h-11 pulso:rounded-full pulso:bg-(--color-action-fill-brand-primary-enabled) pulso:text-white pulso:px-3 pulso:font-semibold",
      "pulso:hover:bg-red-500")}
    />
}
