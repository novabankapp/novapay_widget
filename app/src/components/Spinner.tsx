import { h } from "preact"

type SpinnerProps = {
    color?: string
}
export const Spinner = ({color = "#FFF"} : SpinnerProps) => {
    return (
        <svg width="24" height="24" className="fill-white" fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="3" cy="12" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="12" cy="21" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="5.64" cy="5.64" r="2"/><circle cx="18.36" cy="18.36" r="2"/><circle cx="5.64" cy="18.36" r="2"/><circle cx="18.36" cy="5.64" r="2"/><animateTransform attributeName="transform" type="rotate" dur="1.5s" values="0 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
    )
}