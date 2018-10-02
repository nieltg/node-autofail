import { spawn } from "child_process"

function launchExternal(cmd: string, args: ReadonlyArray<string>) {
  const handle = spawn(cmd, args, {
    stdio: "inherit"
  })

  handle.on("error", err => {
    console.log(`${process.argv0}: Unable to start \`${cmd}\`: ${err.message}`)
  })
}

export function run(argv: ReadonlyArray<string>) {
  process.exitCode = 1

  if (argv.length > 2) {
    launchExternal(argv[2], argv.slice(3))
  }
}
