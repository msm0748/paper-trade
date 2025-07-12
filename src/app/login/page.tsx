'use client';

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useState } from 'react';
import { createClient } from '@/shared/utils/supabase/client';
import { toaster } from '@/shared/ui/toaster';

/**
 * 로그인 페이지
 * 카카오 로그인만 지원합니다.
 */
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  /**
   * 카카오 로그인 처리
   */
  const handleKakaoLogin = async () => {
    try {
      setIsLoading(true);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
        },
      });

      if (error) {
        throw error;
      }

      toaster.create({
        title: '로그인 성공',
        description: '카카오 로그인이 완료되었습니다.',
        type: 'success',
      });
    } catch (err) {
      console.error('카카오 로그인 에러:', err);
      toaster.create({
        title: '로그인 실패',
        description: '로그인 중 오류가 발생했습니다. 다시 시도해주세요.',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="lg">
        <Box
          bg="white"
          _dark={{ bg: 'gray.800' }}
          borderRadius="xl"
          p={8}
          boxShadow="2xl"
        >
          <Stack gap={8} align="center">
            {/* 로고 및 제목 */}
            <Stack gap={4} align="center" textAlign="center">
              <Heading size="lg" color="blue.500">
                Paper Trade
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                로그인하고 시작하세요
              </Text>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                가상 자금 1억원으로 시작하는 리스크 없는 투자 경험
              </Text>
            </Stack>

            {/* 카카오 로그인 버튼 */}
            <Stack gap={4} w="full">
              <Button
                size="lg"
                bg="#FEE500"
                color="black"
                _hover={{ bg: '#FDD835' }}
                _active={{ bg: '#FBC02D' }}
                onClick={handleKakaoLogin}
                loading={isLoading}
                loadingText="로그인 중..."
                w="full"
                py={6}
              >
                <Icon as={RiKakaoTalkFill} mr={2} />
                카카오로 시작하기
              </Button>
            </Stack>

            {/* 부가 정보 */}
            <Stack gap={2} align="center" textAlign="center">
              <Text
                fontSize="sm"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                간편하게 카카오 계정으로 시작하세요
              </Text>
              <Text
                fontSize="xs"
                color="gray.400"
                _dark={{ color: 'gray.500' }}
              >
                로그인 시 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
