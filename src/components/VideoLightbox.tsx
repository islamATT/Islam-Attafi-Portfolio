import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageProvider";

interface VideoLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  driveId: string;
  title: string;
}

export function VideoLightbox({ open, onOpenChange, driveId, title }: VideoLightboxProps) {
  const { t } = useLanguage();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(92vw,420px)] max-w-none border-foreground/10 bg-onyx p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-[9/16] max-h-[78vh] w-full bg-black">
          {open && driveId && (
            <iframe
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              title={title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </div>
        <div className="flex items-baseline justify-between gap-4 px-5 pb-5">
          <p className="font-serif text-lg">{title}</p>
          <p className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-gold">
            {t.lightbox.nowPlaying}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
