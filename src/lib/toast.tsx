/**
 * Custom toast utilities with modern styling
 */
import React from 'react';
import toast, { Toast } from 'react-hot-toast';
import { CheckCircle2, AlertCircle, Info, X, Loader2 } from 'lucide-react';

interface CustomToastProps {
  t: Toast;
  type: 'success' | 'error' | 'info' | 'loading';
  message: string;
}

const CustomToast = ({ t, type, message }: CustomToastProps) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-emerald-600" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-600" />;
      case 'loading':
        return <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getBackgroundClass = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 shadow-emerald-100/50';
      case 'error':
        return 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 shadow-red-100/50';
      case 'info':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-blue-100/50';
      case 'loading':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-blue-100/50';
      default:
        return 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 shadow-gray-100/50';
    }
  };

  const getTextColorClass = () => {
    switch (type) {
      case 'success':
        return 'text-emerald-900';
      case 'error':
        return 'text-red-900';
      case 'info':
        return 'text-blue-900';
      case 'loading':
        return 'text-blue-900';
      default:
        return 'text-gray-900';
    }
  };

  return (
    <div
      className={`
        ${t.visible ? 'animate-enter' : 'animate-leave'}
        max-w-md w-full ${getBackgroundClass()} shadow-lg rounded-xl pointer-events-auto 
        flex items-start p-4 border backdrop-blur-sm transition-all duration-300 
        transform hover:scale-105 hover:shadow-xl
      `}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mr-3 mt-0.5">
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${getTextColorClass()} leading-5`}>
          {message}
        </p>
      </div>

      {/* Close button - only show for non-loading toasts */}
      {type !== 'loading' && (
        <div className="ml-3 flex-shrink-0 flex">
          <button
            className={`
              inline-flex rounded-md p-1.5 transition-colors duration-200
              ${type === 'success' ? 'text-emerald-600 hover:bg-emerald-100' : ''}
              ${type === 'error' ? 'text-red-600 hover:bg-red-100' : ''}
              ${type === 'info' ? 'text-blue-600 hover:bg-blue-100' : ''}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            `}
            onClick={() => toast.dismiss(t.id)}
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// Custom toast functions
export const customToast = {
  success: (message: string, options?: any) => {
    return toast.custom((t) => (
      <CustomToast t={t} type="success" message={message} />
    ), {
      duration: 4000,
      ...options,
    });
  },

  error: (message: string, options?: any) => {
    return toast.custom((t) => (
      <CustomToast t={t} type="error" message={message} />
    ), {
      duration: 5000,
      ...options,
    });
  },

  info: (message: string, options?: any) => {
    return toast.custom((t) => (
      <CustomToast t={t} type="info" message={message} />
    ), {
      duration: 4000,
      ...options,
    });
  },

  loading: (message: string, options?: any) => {
    return toast.custom((t) => (
      <CustomToast t={t} type="loading" message={message} />
    ), {
      duration: Infinity,
      ...options,
    });
  },

  // Function to update loading toast to success/error
  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    }
  ) => {
    return toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
    });
  },
};
