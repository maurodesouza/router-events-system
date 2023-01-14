type PageProps = {
  className?: string
  children: React.ReactNode
}

const Page = ({ className = '', children }: PageProps) => {
  return <div className={`flex flex-col flex-1 ${className}`}>{children}</div>
}

export { Page }
