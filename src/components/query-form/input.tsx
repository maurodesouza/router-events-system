type InputProps = {
  label?: string
}

const Input = ({ label }: InputProps) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <label className="text-sm">{label}</label>

      <input className="rounded w-full h-10 border border-zinc-700 outline-none bg-transparent px-2"/>
    </div>
  )
}

export { Input }
