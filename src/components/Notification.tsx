import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { CheckCircle2, XCircle, Info, AlertCircle, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  onClose: (id: string) => void;
}

const icons = {
  success: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
  error: <XCircle className="w-5 h-5 text-red-600" />,
  info: <Info className="w-5 h-5 text-blue-600" />,
  warning: <AlertCircle className="w-5 h-5 text-amber-600" />,
};

export function Notification({ id, type, title, message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-[4px] bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {icons[type]}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-brand-black">{title}</p>
            {message && (
              <p className="mt-1 text-sm text-brand-darkgray font-light">{message}</p>
            )}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-brand-darkgray hover:text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:ring-offset-2"
              onClick={() => onClose(id)}
            >
              <span className="sr-only">Fermer</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Notification Provider / Manager
export function NotificationContainer({ notifications, onClose }: { notifications: Omit<NotificationProps, 'onClose'>[], onClose: (id: string) => void }) {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6 z-[100]"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification key={notification.id} {...notification} onClose={onClose} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
