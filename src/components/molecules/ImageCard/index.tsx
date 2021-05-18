import React from 'react';
import {Button, Flex, Image} from '@components';
import {IPhoto} from '@types';
import {getImageHeight} from '@utils';
import {HeartIcon} from '@icons';
import {COLORS} from '@config/base';

interface IProps {
  photo: IPhoto;
  def?: boolean;
  like: (id: string) => void;
}

const defaultHeight = 180;

const ImageCard = (props: IProps) => {
  const maxHeight = props.def
    ? defaultHeight * 1.5
    : getImageHeight({photo: props.photo, defaultHeight});

  return (
    <Flex
      full
      styles={{
        borderRadius: 8,
        overflow: 'hidden',
        maxHeight,
        position: 'relative',
      }}>
      <Button
        styles={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
        click={() => props.like(props.photo.id)}
        icon={
          <HeartIcon
            color={
              props.photo.liked_by_user
                ? COLORS.TEXT.SECOND
                : COLORS.TEXT.TRETIARY
            }
          />
        }
      />

      <Image
        resizeMode={'cover'}
        style={{height: maxHeight}}
        source={{
          uri: props.photo.urls.regular,
        }}
      />
    </Flex>
  );
};

export default ImageCard;
