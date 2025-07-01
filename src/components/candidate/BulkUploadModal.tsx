import React, { useState } from 'react';
import { X, Upload, FileText, AlertCircle, CheckCircle, Clock, Link, Settings } from 'lucide-react';
import { AccountManagementModal } from './AccountManagementModal';
import { ConnectAccountModal } from './ConnectAccountModal';

interface BulkUploadModalProps {
  onClose: () => void;
}

export const BulkUploadModal: React.FC<BulkUploadModalProps> = ({ onClose }) => {
  const [uploadStep, setUploadStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState<'file' | 'platform'>('file');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [showAccountManagement, setShowAccountManagement] = useState(false);
  const [showConnectAccount, setShowConnectAccount] = useState(false);
  const [selectedPlatformToConnect, setSelectedPlatformToConnect] = useState<any>(null);
  const [processingResults, setProcessingResults] = useState([
    { name: 'zhangsan.pdf', status: 'success', score: 87, message: '解析成功，评分87分' },
    { name: 'lisi.docx', status: 'success', score: 72, message: '解析成功，评分72分' },
    { name: 'wangwu.pdf', status: 'warning', score: 45, message: '解析成功，但分数较低' },
    { name: 'malformed.pdf', status: 'error', score: 0, message: '文件损坏，解析失败' }
  ]);

  const [platforms, setPlatforms] = useState([
    {
      id: 'boss',
      name: 'Boss直聘',
      icon: '👔',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      connected: true
    },
    {
      id: 'zhilian',
      name: '智联招聘',
      icon: '🏢',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      connected: false
    },
    {
      id: 'liepin',
      name: '猎聘',
      icon: '🎯',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      connected: true
    }
  ]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleConnect = (platformId: string) => {
    const platform = platforms.find(p => p.id === platformId);
    if (platform) {
      setSelectedPlatformToConnect(platform);
      setShowConnectAccount(true);
    }
  };

  const handleAccountConnected = (accountData: any) => {
    // Update platform connection status
    setPlatforms(prev => prev.map(platform => 
      platform.id === selectedPlatformToConnect?.id 
        ? { ...platform, connected: true }
        : platform
    ));
    
    setShowConnectAccount(false);
    setSelectedPlatformToConnect(null);
    
    // Show success message or handle the connected account data
    console.log('Account connected:', accountData);
  };

  const handleUpload = () => {
    setUploadStep(2);
    // 模拟上传进度
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setUploadStep(3), 500);
      }
    }, 200);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">批量上传简历</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${uploadStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  uploadStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>1</div>
                <span className="font-medium">选择来源</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className={`flex items-center space-x-2 ${uploadStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  uploadStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>2</div>
                <span className="font-medium">上传处理</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className={`flex items-center space-x-2 ${uploadStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  uploadStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>3</div>
                <span className="font-medium">处理结果</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {uploadStep === 1 && (
              <div className="space-y-6">
                {/* Method Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">选择简历来源</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedMethod('file')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedMethod === 'file' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">本地文件上传</div>
                      <div className="text-sm text-gray-500 mt-1">上传本地简历文件</div>
                    </button>
                    <button
                      onClick={() => setSelectedMethod('platform')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedMethod === 'platform' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Link className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">平台简历同步</div>
                      <div className="text-sm text-gray-500 mt-1">从招聘平台导入</div>
                    </button>
                  </div>
                </div>

                {selectedMethod === 'file' && (
                  <>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">选择简历文件</h3>
                      <p className="text-gray-600 mb-4">
                        支持 PDF、Word、图片格式，单个文件最大 10MB
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                      >
                        选择文件
                      </label>
                    </div>

                    {files.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">已选择文件 ({files.length})</h4>
                        <div className="max-h-40 overflow-y-auto space-y-2">
                          {files.map((file, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-700 flex-1">{file.name}</span>
                              <span className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {selectedMethod === 'platform' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">选择招聘平台</h4>
                      <button 
                        onClick={() => setShowAccountManagement(true)}
                        className="text-blue-600 hover:text-blue-700 text-sm flex items-center space-x-1"
                      >
                        <Settings className="w-4 h-4" />
                        <span>账号管理</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          className={`border-2 rounded-lg p-4 transition-all ${platform.color} ${
                            selectedPlatforms.includes(platform.id) ? 'ring-2 ring-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{platform.icon}</span>
                              <div>
                                <div className="font-medium text-gray-900">{platform.name}</div>
                                <div className="text-sm text-gray-500">
                                  {platform.connected ? '已连接账号' : '未连接账号'}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {platform.connected ? (
                                <label className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedPlatforms.includes(platform.id)}
                                    onChange={() => handlePlatformToggle(platform.id)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="ml-2 text-sm text-gray-700">选择导入</span>
                                </label>
                              ) : (
                                <button 
                                  onClick={() => handleConnect(platform.id)}
                                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                >
                                  连接账号
                                </button>
                              )}
                            </div>
                          </div>
                          
                          {platform.connected && selectedPlatforms.includes(platform.id) && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <div className="text-sm text-gray-600 mb-2">导入设置：</div>
                              <div className="space-y-2 text-sm">
                                <label className="flex items-center">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                                  <span className="ml-2">仅导入新收到的简历</span>
                                </label>
                                <label className="flex items-center">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                                  <span className="ml-2">自动匹配对应职位</span>
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedPlatforms.length > 0 && (
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-green-800">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">
                            已选择 {selectedPlatforms.length} 个平台进行简历同步
                          </span>
                        </div>
                        <div className="text-sm text-green-700 mt-1">
                          预计将同步约 {selectedPlatforms.length * 15} 份简历
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">处理说明</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 系统将自动解析简历内容，提取关键信息</li>
                    <li>• 根据当前职位要求进行智能评分</li>
                    <li>• 评分达到阈值的简历将自动进入合格候选人池</li>
                    <li>• 处理完成后可查看详细的解析结果和评分依据</li>
                    {selectedMethod === 'platform' && (
                      <li>• 平台简历将保持与原平台的关联，便于后续跟进</li>
                    )}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={
                      (selectedMethod === 'file' && files.length === 0) ||
                      (selectedMethod === 'platform' && selectedPlatforms.length === 0)
                    }
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {selectedMethod === 'file' 
                      ? `开始处理 (${files.length} 个文件)`
                      : `开始同步 (${selectedPlatforms.length} 个平台)`
                    }
                  </button>
                </div>
              </div>
            )}

            {uploadStep === 2 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {selectedMethod === 'file' ? '正在处理简历...' : '正在同步简历...'}
                  </h3>
                  <p className="text-gray-600">
                    {selectedMethod === 'file' 
                      ? 'AI正在解析简历内容并进行智能评分'
                      : '正在从选定平台获取简历并进行智能解析'
                    }
                  </p>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{uploadProgress}% 完成</p>
              </div>
            )}

            {uploadStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">处理完成</h3>
                  <p className="text-gray-600">
                    {selectedMethod === 'file' 
                      ? `共处理 ${processingResults.length} 份简历`
                      : `共同步 ${processingResults.length} 份简历`
                    }
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">处理结果</h4>
                  {processingResults.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0">
                        {result.status === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {result.status === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                        {result.status === 'error' && <AlertCircle className="w-5 h-5 text-red-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{result.name}</span>
                          {result.score > 0 && (
                            <span className={`text-sm font-medium px-2 py-1 rounded ${
                              result.score >= 80 ? 'bg-green-100 text-green-800' :
                              result.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {result.score}分
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{result.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">2</div>
                    <div className="text-sm text-green-800">成功解析</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-yellow-600">1</div>
                    <div className="text-sm text-yellow-800">需要关注</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-red-600">1</div>
                    <div className="text-sm text-red-800">解析失败</div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  完成
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Account Management Modal */}
      {showAccountManagement && (
        <AccountManagementModal
          onClose={() => setShowAccountManagement(false)}
        />
      )}

      {/* Connect Account Modal */}
      {showConnectAccount && selectedPlatformToConnect && (
        <ConnectAccountModal
          platform={selectedPlatformToConnect}
          onClose={() => {
            setShowConnectAccount(false);
            setSelectedPlatformToConnect(null);
          }}
          onConnect={handleAccountConnected}
        />
      )}
    </>
  );
};
