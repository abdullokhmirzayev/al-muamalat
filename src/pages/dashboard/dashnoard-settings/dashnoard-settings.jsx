import { useState } from 'react'
import AccountSettings from './components/account-settings'
import SecuritySettings from './components/security-settings'

export default function DashboardSettings() {
	const [activeTab, setActiveTab] = useState('account')

	return (
		<div className='min-h-full w-full rounded-2xl bg-white p-8 shadow-sm'>
			<div className='mb-8 flex gap-8 border-b border-slate-100'>
				<button
					onClick={() => setActiveTab('account')}
					className={`relative pb-4 text-sm font-semibold transition-colors cursor-pointer ${
						activeTab === 'account'
							? 'text-[#299D91]'
							: 'text-slate-400 hover:text-slate-600'
					}`}
				>
					Account
					{activeTab === 'account' && (
						<span className='absolute bottom-0 left-0 h-0.5 w-full bg-[#299D91] rounded-t-md'></span>
					)}
				</button>

				<button
					onClick={() => setActiveTab('security')}
					className={`relative pb-4 text-sm font-semibold transition-colors  cursor-pointer ${
						activeTab === 'security'
							? 'text-[#299D91]'
							: 'text-slate-400 hover:text-slate-600'
					}`}
				>
					Security
					{activeTab === 'security' && (
						<span className='absolute bottom-0 left-0 h-0.5 w-full bg-[#299D91] rounded-t-md'></span>
					)}
				</button>
			</div>

			{activeTab === 'account' ? <AccountSettings /> : <SecuritySettings />}
		</div>
	)
}
