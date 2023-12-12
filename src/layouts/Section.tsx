import styled from 'styled-components';
import { LayoutProps } from 'types/type';

export default function Section({ children }: LayoutProps) {
  return <section>{children}</section>;
}

const SectionBox = styled.section``;
