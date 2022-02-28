interface Props {
  title: string
  subTitle: string
}

export default function SectionHeader({ title, subTitle }: Props) {
  return (
    <div className="mx-auto flex w-full flex-col items-center py-10">
      <p className=" font-Oswald text-7xl leading-normal underline underline-offset-4">
        {title}
      </p>
      <p className=" font-Montserrat text-xl font-thin">{subTitle}</p>
    </div>
  )
}
