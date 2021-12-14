import BasePage from "./basePage";

export interface ErrorPageProps {
  message: string
}

export default function ErrorPage({message}: ErrorPageProps) {
  return (
    <BasePage body={<div>{message}</div>}/>
  )
}
