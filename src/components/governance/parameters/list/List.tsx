import { Heading, Accordion } from '@chakra-ui/react';
import ListItem from './Item';

function List({ items }: any) {
  return (
    <>
      <Heading size="md">Governance Parameters</Heading>
      <Accordion w="100%">
        {items.map((item: string) => {
          return <ListItem itemName={item}>{item}</ListItem>;
        })}
      </Accordion>
    </>
  );
}

export default List;
