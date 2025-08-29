import React from 'react';

/**
 * Project statistics section for Projects page
 * Displays key company metrics and achievements
 */
export function Stats() {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Industry Partners' },
    { value: '99%', label: 'Success Rate' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <section className="py-24 sm:py-32 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
