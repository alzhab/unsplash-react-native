import React, {ReactElement} from 'react';
import {AnimateItTiming, Flex, Text} from '../../atoms';
import {Button} from '../../molecules';
import {COLORS} from '@config/base';
import {ButtonTypes, DIR, IconProps, JC, Navigations} from '@types';
import {boxShadow} from '@config/mixins';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TABBAR_BOTTOM, TABBAR_HEIGHT} from '@config/spacing';

const BottomBar = (props: BottomTabBarProps) => {
  const routes = props.state.routes;
  const history = props.state.history;
  const descrptors = props.descriptors;

  const activeKey = history[history.length - 1].key;

  const navigate = (route: Navigations, key: string) => {
    if (activeKey !== key) {
      props.navigation.navigate(route);
    }
  };
  return (
    <Flex
      full
      dir={DIR.row}
      jc={JC.spaceBetween}
      styles={{
        height: TABBAR_HEIGHT,
        backgroundColor: COLORS.BG.MAIN,
        paddingBottom: TABBAR_BOTTOM,
        ...boxShadow(),
      }}>
      {routes.map((route) => {
        const key = route.key;
        const options = descrptors[key].options;
        // @ts-ignore
        const Icon: (props: IconProps) => ReactElement = options.Icon;
        const isActive = activeKey === key;

        return (
          <Button
            key={route.name}
            styles={{
              position: 'relative',
              width: '25%',
              flexDirection: 'column',
            }}
            type={ButtonTypes.EMPTY}
            paddings={{top: 15, right: 0}}
            click={() => {
              navigate(Navigations[route.name], route.key);
            }}>
            <AnimateItTiming
              show={isActive}
              interpolations={[
                {
                  name: 'opacity',
                  outputRange: [0, 1],
                  dir: 'both',
                },
              ]}
              style={{
                position: 'absolute',
                width: 50,
                left: 50 / 2,
                bottom: 0,
                height: 2,
                backgroundColor: COLORS.PRIMARY.MAIN,
              }}>
              <></>
            </AnimateItTiming>

            <Icon
              color={isActive ? COLORS.PRIMARY.MAIN : COLORS.TEXT.SECOND}
              sizeHeight={24}
            />

            <Text
              size={12}
              styles={{marginTop: 10}}
              color={isActive ? COLORS.PRIMARY.MAIN : COLORS.TEXT.SECOND}>
              {options.title}
            </Text>
          </Button>
        );
      })}
    </Flex>
  );
};

export default BottomBar;
