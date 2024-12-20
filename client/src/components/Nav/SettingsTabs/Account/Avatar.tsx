import { FileImage } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { fileConfig as defaultFileConfig, mergeFileConfig } from 'librechat-data-provider';
import type { TUser } from 'librechat-data-provider';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui';
import { useUploadAvatarMutation, useGetFileConfig } from '~/data-provider';
import { useToastContext } from '~/Providers';
import { Spinner } from '~/components/svg';
import { cn, formatBytes } from '~/utils';
import { useLocalize } from '~/hooks';
import store from '~/store';

function Avatar() {
  const setUser = useSetRecoilState(store.user);
  const [input, setinput] = useState<File | null>(null);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { data: fileConfig = defaultFileConfig } = useGetFileConfig({
    select: (data) => mergeFileConfig(data),
  });

  const localize = useLocalize();
  const { showToast } = useToastContext();

  const { mutate: uploadAvatar, isLoading: isUploading } = useUploadAvatarMutation({
    onSuccess: (data) => {
      showToast({ message: localize('com_ui_upload_success') });
      setDialogOpen(false);

      setUser((prev) => ({ ...prev, avatar: data.url } as TUser));
    },
    onError: (error) => {
      console.error('Error:', error);
      showToast({ message: localize('com_ui_upload_error'), status: 'error' });
    },
  });

  useEffect(() => {
    if (input) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(input);
    } else {
      setPreviewUrl(null);
    }
  }, [input]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (fileConfig.avatarSizeLimit && file && file.size <= fileConfig.avatarSizeLimit) {
      setinput(file);
      setDialogOpen(true);
    } else {
      const megabytes = fileConfig.avatarSizeLimit ? formatBytes(fileConfig.avatarSizeLimit) : 2;
      showToast({
        message: localize('com_ui_upload_invalid_var', megabytes + ''),
        status: 'error',
      });
    }
  };

  const handleUpload = () => {
    if (!input) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('input', input, input.name);
    formData.append('manual', 'true');

    uploadAvatar(formData);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <span>{localize('com_nav_profile_picture')}</span>
        <label htmlFor={'file-upload-avatar'} className="btn btn-neutral relative">
          <FileImage className="mr-2 flex w-[22px] items-center stroke-1" />
          <span>{localize('com_nav_change_picture')}</span>
          <input
            id={'file-upload-avatar'}
            value=""
            type="file"
            className={cn('hidden')}
            accept=".png, .jpg"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={() => setDialogOpen(false)}>
        <DialogContent
          className={cn('shadow-2xl dark:bg-gray-700 dark:text-white md:h-[350px] md:w-[450px] ')}
          style={{ borderRadius: '12px' }}
        >
          <DialogHeader>
            <DialogTitle className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-20">
              {localize('com_ui_preview')}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center">
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mb-2 rounded-full"
                style={{
                  maxWidth: '100%',
                  maxHeight: '150px',
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                }}
              />
            )}
            <button
              className={cn(
                'mt-4 rounded px-4 py-2 text-white transition-colors hover:bg-pink-600 hover:text-gray-100',
                isUploading ? 'cursor-not-allowed bg-pink-600' : 'bg-pink-500',
              )}
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <div className="flex h-6">
                  <Spinner className="icon-sm m-auto" />
                </div>
              ) : (
                localize('com_ui_upload')
              )}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Avatar;
