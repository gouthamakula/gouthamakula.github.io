declare module 'react-water-wave' {
    import { ComponentType } from 'react';
  
    const WaterWave: ComponentType<{ imageUrl?: string; dropRadius?: number; resolution?: number; perturbance?: number; children?: () => JSX.Element; interactive?: boolean}>;
  
    export default WaterWave;
  }
  