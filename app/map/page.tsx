import DemoMap from "@/components/map/Core"

export default function MapPage() {
  return (
    <section className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <DemoMap />
      </div>
    </section>
  )
}
