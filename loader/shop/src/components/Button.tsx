

export default function Button({children}:any) {
  return (
    <button className="rounded-sm bg-blue-400 px-3 py-1 border-2 font-bold">
      {children}
    </button>
  )
}
