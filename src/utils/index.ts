import packageJson from '../../package.json';

const checkVersion = (): void => console.log(`Version: ${packageJson.version}`);

const millisToMinutesAndSeconds = (millis: string): string => {
  const minutes = Math.floor(Number(millis) / 60000);
  const seconds = ((Number(millis) % 60000) / 1000).toFixed(0);

  //@ts-ignore
  // return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds + 's';
};

export { checkVersion, millisToMinutesAndSeconds };
