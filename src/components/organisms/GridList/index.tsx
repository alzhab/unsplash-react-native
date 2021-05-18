import React, {Ref, useCallback, useMemo, useRef, useState} from 'react';
import {
  Button,
  Empty,
  Flex,
  ImageCard,
  LoadingSmall,
  SortButtons,
} from '@components';
import {IPhoto, SortButtonsTypes} from '@types';
import {horizontalScale, verticalScale} from '@config/mixins';
import {FlatList, RefreshControl} from 'react-native';
import {styles} from './styles';
import {COLORS} from '@config/base';
import {ArrowUpIcon} from '@icons';

interface IProps {
  data: IPhoto[];
  like: (id: string) => void;
  refreshLoading?: boolean;
  refresh?: () => void;
  loadMore?: () => void;
  moreLoading?: boolean;
}

const GridList = (props: IProps) => {
  const ref: Ref<FlatList> = useRef(null);
  const [activeSort, setActiveSort] = useState<SortButtonsTypes>(
    SortButtonsTypes.list,
  );

  const header = useCallback(() => {
    return <SortButtons active={activeSort} click={setActiveSort} />;
  }, [activeSort, setActiveSort]);

  const footer = useCallback(() => {
    return (
      <Flex
        full
        styles={{
          paddingTop: verticalScale(15),
          paddingBottom: verticalScale(15),
        }}>
        <LoadingSmall show={props.moreLoading || false} />
      </Flex>
    );
  }, [props.moreLoading]);

  const renderItem = useCallback(
    ({item}) => (
      <Flex
        styles={{
          width: activeSort === SortButtonsTypes.list ? '100%' : '48%',
          marginBottom: verticalScale(18),
        }}>
        <ImageCard
          like={props.like}
          photo={item}
          def={activeSort === SortButtonsTypes.grid}
        />
      </Flex>
    ),
    [activeSort],
  );

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={props.refreshLoading || false}
        onRefresh={() => (props.refresh ? props.refresh() : null)}
        tintColor={COLORS.PRIMARY.MAIN}
        colors={[COLORS.PRIMARY.MAIN]}
      />
    ),
    [props.refreshLoading, props.refresh],
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <Flex full size={1} styles={{position: 'relative'}}>
      <Button
        paddings={{top: 13}}
        styles={{
          position: 'absolute',
          bottom: verticalScale(92),
          right: horizontalScale(32),
          backgroundColor: COLORS.BG.MAIN,
          zIndex: 1,
          borderRadius: 8,
        }}
        click={() => {
          if (ref.current) {
            ref.current.scrollToOffset({animated: true, offset: 0});
          }
        }}
        icon={<ArrowUpIcon color={COLORS.TEXT.TRETIARY} />}
      />

      <FlatList
        ref={ref}
        numColumns={2}
        key={2}
        style={styles.root}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={[
          styles.contentContainer,
          {
            flex: props.data.length ? undefined : 1,
          },
        ]}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => <Empty />}
        ListHeaderComponent={header}
        data={props.data.slice()}
        renderItem={renderItem}
        refreshControl={props.refresh ? refreshControl : undefined}
        onEndReachedThreshold={0.1}
        ListFooterComponent={footer}
        onEndReached={() => {
          if (!props.moreLoading && props.loadMore) {
            props.loadMore();
          }
        }}
      />
    </Flex>
  );
};

export default GridList;
