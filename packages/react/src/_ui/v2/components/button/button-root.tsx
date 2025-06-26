import { cn } from "@/utilities/cn"

export function ButtonRoot(props: React.ComponentProps<'button'>) {
  return <button
    {...props}
    className={cn("pulso:h-11 pulso:cursor-pointer pulso:rounded-full pulso:bg-blue-500 pulso:text-white pulso:px-3 pulso:font-semibold",
      "pulso:hover:bg-blue-600")}
    />
}
