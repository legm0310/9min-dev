import { notFound } from 'next/navigation';
import { projects } from '@/constants/projects';

interface ProjectDetailProps {
  params: { slug: string };
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <section>소개</section>
      <section>담당 기능 개발 내용</section>
      <section>기술 스택</section>
      <section>아키텍처</section>
      <section>획득역량 및 트러블 슈팅</section>
      <section>결과 및 성과</section>
      <section>회고 및 개선점</section>
    </>
  );
};

export default ProjectDetail;
