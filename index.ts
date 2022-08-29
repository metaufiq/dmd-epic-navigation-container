import dynamic from 'next/dynamic';
import Navigation from './src/components/NavigationContainer'

export const NavigationContainer = dynamic(
  () => import('./src/components/NavigationContainer' /* webpackChunkName: "SimpleBarChart" */).then((mod) => mod as any),
  { ssr: false }
) as typeof Navigation;

export default NavigationContainer;