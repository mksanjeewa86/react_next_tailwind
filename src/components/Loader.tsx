import { CircularProgress } from '@material-ui/core'

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 z-[10000] w-full h-full bg-black bg-opacity-50">
      <CircularProgress
        color="secondary"
        size={50}
        className="fixed z-[10001] top-1/2 left-1/2"
      />
    </div>
  )
}
