import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface VideoLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vimeoId: string;
  title: string;
}

export function VideoLightbox({ open, onOpenChange, vimeoId, title }: VideoLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] border-foreground/10 bg-onyx p-0 sm:max-w-5xl">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-video w-full bg-black">
          {open && (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </div>
        <div className="flex items-baseline justify-between px-6 pb-6">
          <p className="font-serif text-xl">{title}</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Now Playing</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
