import React, {ReactElement, useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Skeletons} from '@components';

const Image = (props: {
  style?: any;
  source: Source | number;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  tintColor?: string;
}): ReactElement => {
  const [load, setLoad] = useState(true);

  return (
    <>
      <FastImage
        onLoadStart={() => setLoad(true)}
        onLoadEnd={() => setLoad(false)}
        style={[{width: '100%', height: '100%'}, props.style]}
        source={props.source}
        tintColor={props.tintColor}
        resizeMode={FastImage.resizeMode[props.resizeMode || 'cover']}>
        {load && props.style && props.style.height && (
          <Skeletons height={props.style.height} />
        )}
      </FastImage>
    </>
  );
};

export default Image;
