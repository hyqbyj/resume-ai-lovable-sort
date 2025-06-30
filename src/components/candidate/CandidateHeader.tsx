import React from 'react';
import { Avatar, Typography, Space } from 'antd';

interface CandidateHeaderProps {
  name: string;
  score: number;
  avatarUrl?: string;
}

export const CandidateHeader: React.FC<CandidateHeaderProps> = ({
  name,
  score,
  avatarUrl = ''
}) => {
  return (
    <Space size="middle">
      <Avatar src={avatarUrl} size={48} />
      <Typography.Text strong>{name}</Typography.Text>
      <Typography.Text type="secondary">匹配度: {score}%</Typography.Text>
    </Space>
  );
};
