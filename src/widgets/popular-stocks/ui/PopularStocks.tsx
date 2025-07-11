'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Button,
  Stack,
  Separator,
} from '@chakra-ui/react';
import { mockPopularStocks, getChangeColor } from '@/entities/stock';

/**
 * 인기 종목 랭킹 위젯
 * 실시간 인기 종목 순위를 표시합니다.
 */
export const PopularStocks = () => {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="md"
      p={6}
      _dark={{ bg: 'gray.800' }}
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md" color="blue.500" _dark={{ color: 'blue.300' }}>
          🏆 인기 종목
        </Heading>
        <Button size="xs" variant="ghost">
          더보기
        </Button>
      </Flex>

      <Stack gap={3}>
        {mockPopularStocks.map((stock) => (
          <Box key={stock.rank}>
            <Flex justify="space-between" align="center" py={2}>
              <Stack direction="row" gap={3} align="center">
                <Badge
                  colorScheme="blue"
                  variant="solid"
                  minW="24px"
                  textAlign="center"
                >
                  {stock.rank}
                </Badge>
                <Box>
                  <Text fontWeight="semibold" fontSize="sm">
                    {stock.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.600"
                    _dark={{ color: 'gray.300' }}
                  >
                    {stock.code}
                  </Text>
                </Box>
              </Stack>
              <Stack gap={0} align="end">
                <Text fontWeight="bold" fontSize="sm">
                  {stock.price}
                </Text>
                <Text
                  fontSize="xs"
                  color={getChangeColor(stock.isPositive)}
                  fontWeight="semibold"
                >
                  {stock.change}
                </Text>
              </Stack>
            </Flex>
            {stock.rank < mockPopularStocks.length && <Separator />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
